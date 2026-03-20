"use client";
import styles from "./ScrollIndicator.module.css";
import { motion } from "framer-motion";

export default function ScrollIndicator({ className = "" }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2.0, duration: 2 }}
            className={className}
        >
            <span className={styles.arrow}></span>
            <span className={styles.arrow}></span>
            <span className={styles.arrow}></span>
        </motion.div>
    );
}